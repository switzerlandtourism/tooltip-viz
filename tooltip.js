const Tooltip = ({ element, config }) => {
  const container = document.createElement("div");
  container.style.position = "relative";
  container.style.display = "inline-block";

  const icon = document.createElement("span");
  icon.textContent = config.tooltip_icon || "ℹ️";
  icon.style.cursor = "pointer";

  const tooltip = document.createElement("div");
  tooltip.textContent = config.tooltip_text || "This is a tooltip.";
  tooltip.style.visibility = "hidden";
  tooltip.style.background = "#333";
  tooltip.style.color = "#fff";
  tooltip.style.padding = "6px 10px";
  tooltip.style.borderRadius = "5px";
  tooltip.style.position = "absolute";
  tooltip.style.bottom = "125%";
  tooltip.style.left = "50%";
  tooltip.style.transform = "translateX(-50%)";
  tooltip.style.whiteSpace = "nowrap";
  tooltip.style.zIndex = "10";
  tooltip.style.opacity = "0";
  tooltip.style.transition = "opacity 0.2s";

  icon.onmouseover = () => {
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1";
  };
  icon.onmouseout = () => {
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = "0";
  };

  container.appendChild(icon);
  container.appendChild(tooltip);
  element.appendChild(container);
};

export const tooltip = Tooltip;
