import "@testing-library/jest-dom/vitest";

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(() => {
  delete window.gtag;
});
