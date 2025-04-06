export function renderDonut(containerId: string): void {
  const asciiContainer = document.getElementById(containerId);

  if (!asciiContainer) {
    console.error('Element with id "ascii-art" not found.');
    return;
  }

  let A = 0; // Rotation angle A
  let B = 0; // Rotation angle B
  const K2 = 5;
  const K3 = 240; // Grid size
  const K4 = 70;  // Scaling factor
  const R1 = 1.5;
  const R2 = 2.5;

  const luminanceChars = '.,-~:;=!*#$@';

  // Dynamically generate seed positions based on K3
  function generateSeedPositions(): number[] {
    const seeds: number[] = [];
    const seedCount = 20; // Number of seeds
    const seedSpacing = Math.floor(K3 * K3 / seedCount);

    for (let i = 0; i < seedCount; i++) {
      seeds.push(i * seedSpacing);
    }

    return seeds;
  }

  const predefinedSeeds = generateSeedPositions();
  let seedPositions: number[] = [];

  // Initialize seeds based on totalPurchases
  function initializeSeeds(total: number): void {
    const maxSeeds = predefinedSeeds.length;
    const seedsToColor = Math.min(total, maxSeeds);
    seedPositions = predefinedSeeds.slice(0, seedsToColor);
    console.log('Initialized Seeds:', seedPositions);
  }

  // Wait until window.totalPurchases is defined
  function waitForTotalPurchases(callback: () => void): void {
    if (typeof (window as any).totalPurchases !== 'undefined') {
      callback();
    } else {
      setTimeout(() => waitForTotalPurchases(callback), 100);
    }
  }

  waitForTotalPurchases(() => {
    initializeSeeds((window as any).totalPurchases);
    renderFrame();
  });

  function renderFrame(): void {
    // Initialize screen buffer and z-buffer
    const screen: string[] = Array(K3 * K3).fill(' ');
    const zBuffer: number[] = Array(K3 * K3).fill(0);

    for (let theta = 0; theta < Math.PI * 2; theta += 0.02) {
      for (let phi = 0; phi < Math.PI * 2; phi += 0.01) {
        const cosTheta = Math.cos(theta);
        const sinTheta = Math.sin(theta);
        const cosPhi = Math.cos(phi);
        const sinPhi = Math.sin(phi);

        // Torus parametric equations
        const circleX = R2 + R1 * cosTheta;
        const circleY = R1 * sinTheta;

        // 3D coordinates after rotation
        const x = circleX * (Math.cos(B) * cosPhi + Math.sin(A) * Math.sin(B) * sinPhi) - circleY * Math.cos(A) * Math.sin(B);
        const y = circleX * (Math.sin(B) * cosPhi - Math.sin(A) * Math.cos(B) * sinPhi) + circleY * Math.cos(A) * Math.cos(B);
        const z = K2 + Math.cos(A) * circleX * sinPhi + circleY * Math.sin(A);

        // Projection
        const ooz = 1 / z; // "One over z"
        const xp = Math.floor(K3 / 2 + K4 * ooz * x);
        const yp = Math.floor(K3 / 2 - K4 * ooz * y);

        // Boundary checks
        if (xp < 0 || xp >= K3 || yp < 0 || yp >= K3) continue;

        const idx = xp + yp * K3;

        // Calculate luminance
        const L = cosPhi * cosTheta * Math.sin(B) - Math.cos(A) * cosTheta * sinPhi -
                  Math.sin(A) * sinTheta + Math.cos(B) * (Math.cos(A) * sinTheta - cosTheta * Math.sin(A) * sinPhi);

        if (L > 0 && ooz > zBuffer[idx]) {
          zBuffer[idx] = ooz;
          const luminance = Math.floor(L * 8);
          const clampedLuminance = Math.max(0, Math.min(luminance, luminanceChars.length - 1));
          const char = luminanceChars[clampedLuminance];

          // Check if this position is a seed to be colored
          if (seedPositions.includes(idx)) {
            screen[idx] = `<span class="seed">${char}</span>`;
          } else {
            screen[idx] = char;
          }
        }
      }
    }

    // Build output string with line breaks
    asciiContainer.innerHTML = screen.reduce((acc, char, i) => {
      acc += char;
      if ((i + 1) % K3 === 0) acc += '<br>';
      return acc;
    }, '');

    A += 0.04; // Rotation speed A
    B += 0.02; // Rotation speed B
    requestAnimationFrame(renderFrame);
  }

  renderFrame();
}