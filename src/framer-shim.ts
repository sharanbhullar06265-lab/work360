export const addPropertyControls = (..._args: unknown[]) => {};

export const ControlType = new Proxy(
  {},
  {
    get: (_target, prop) => String(prop),
  }
) as Record<string, string>;

export const RenderTarget = {
  current: () => "PREVIEW",
  canvas: "CANVAS",
  preview: "PREVIEW",
  export: "EXPORT",
  hasRestrictions: () => false,
};

export const useIsStaticRenderer = () => false;
