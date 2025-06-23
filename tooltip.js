const TooltipViz = ({ element }) => {
  const container = document.createElement("div");
  container.style.position = "relative";
  container.style.display = "inline-block";

  const icon = document.createElement("span");
  icon.innerText = "ℹ️";
  icon.style.cursor = "pointer";

  const tooltip = document.createElement("div");
  tooltip.innerText = "Dies ist ein benutzerdefinierter Tooltip.";
  tooltip.style.visibility = "hidden";
  tooltip.style.backgroundColor = "#555";
  tooltip.style.color = "#fff";
  tooltip.style.textAlign = "center";
  tooltip.style.borderRadius = "6px";
  tooltip.style.padding = "5px";
  tooltip.style.position = "absolute";
  tooltip.style.zIndex = "1";
  tooltip.style.bottom = "125%";
  tooltip.style.left = "50%";
  tooltip.style.transform = "translateX(-50%)";
  tooltip.style.opacity = "0";
  tooltip.style.transition = "opacity 0.3s";

  icon.addEventListener("mouseover", () => {
    tooltip.style.visibility = "visible";
    tooltip.style.opacity = "1";
  });
  icon.addEventListener("mouseout", () => {
    tooltip.style.visibility = "hidden";
    tooltip.style.opacity = "0";
  });

  container.appendChild(icon);
  container.appendChild(tooltip);
  element.appendChild(container);
};
