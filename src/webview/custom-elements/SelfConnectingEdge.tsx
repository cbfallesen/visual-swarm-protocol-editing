import React from "react";
import { BaseEdge, EdgeLabelRenderer, EdgeProps } from "@xyflow/react";
import { SmoothStepEdge } from "@xyflow/react";

// Example from React Flow: https://reactflow.dev/examples/edges/custom-edges
export default function SelfConnecting(props: EdgeProps) {
  // we are using the default bezier edge when source and target are not the same
  if (props.source !== props.target) {
    return <SmoothStepEdge {...props} />;
  }

  // Split props to match the following values
  const { sourceX, sourceY, targetX, targetY, markerEnd, label, style } = props;

  // Approximate width of the label
  const labelWidth = (label?.toString().length ?? 0) * 2.25;

  // Set radius (switched from the example, to use top and bottom instead of left and right)
  const radiusX = Math.max(100, 2 * labelWidth);
  const radiusY = (sourceY - targetY) * 0.7;

  // Create a path for the edge that loops back to same node
  const edgePath = `M ${sourceX} ${sourceY} A ${radiusX} ${radiusY} 0 1 1 ${
    targetX - 2
  } ${targetY}`;

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} {...props} />
      {/* Add label to the edge (inspired by https://reactflow.dev/examples/edges/edge-label-renderer) */}
      {label && (
        <EdgeLabelRenderer>
          {/* Position the label in the middle of the edge */}
          <div
            style={{
              position: "absolute",
              transform: `translate(-50%, -50%) translate(${
                sourceX - 1.75 * radiusX
              }px, ${(targetY + sourceY) / 2}px)`,
              background: "white",
              padding: "3px",
              border: "solid #000",
              borderWidth: "thin",
              borderRadius: "2px",
              fontSize: "10px",
              color: "black",
            }}
          >
            {label}
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}
