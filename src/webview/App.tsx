import React, { useEffect, useState } from "react";
import Flow from "./TestFlow";
import JSON5 from "json5";

// Define types of nodes and transitions for protocols
type InitialNode = {
  name: string;
};

type Transition = {
  source: string;
  target: string;
  label: TransitionLabel;
};

type TransitionLabel = {
  cmd: string;
  logType: string[];
  role: string;
};

interface SwarmProtocol {
  initial: InitialNode;
  transitions: Transition[];
}

const App: React.FC = () => {
  const [fileContent, setFileContent] = useState<string>("");
  // Set the initial state of nodes and edges, to ensure rerendering after values are set
  const [nodes, setNodes] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);

  useEffect(() => {
    // Listen for messages from the VS Code extension
    window.addEventListener("message", (event) => {
      const message = event.data;

      if (message.command === "fileData") {
        // Parse the JSON5 data
        const protocol: SwarmProtocol = JSON5.parse(message.data);

        // Create edges for the flowchart
        setEdges(createEdges(protocol.transitions));

        // Create nodes for the flowchart
        setNodes(createNodes(protocol.transitions));
      } else if (message.command === "selectedText") {
        // Update the state with the selected text
        setFileContent(message.selectedText);
      }
    });

    return () => {
      window.removeEventListener("message", () => {});
    };
  }, []);

  return (
    <div>
      <Flow nodes={nodes} edges={edges} />
    </div>
  );
};

// Created partly using coPilot
function createEdges(transitions: Transition[]): any[] {
  // Take the values from transitions, and create edges that correspond to ReactFlow
  const edges = transitions.map((transition) => {
    return {
      id: `${transition.source}-${transition.target}`,
      source: transition.source,
      target: transition.target,
      label: transition.label.cmd,
    };
  });

  return edges;
}

function createNodes(transitions: Transition[]): any[] {
  const nodeNames = new Set<string>();

  // Find all unique nodes from transitions
  transitions.forEach((element) => {
    if (!nodeNames.has(element.source)) {
      nodeNames.add(element.source);
    }

    if (!nodeNames.has(element.target)) {
      nodeNames.add(element.target);
    }
  });

  // Create nodes that correspond to ReactFlow
  const nodes = Array.from(nodeNames).map((nodeName) => {
    return {
      id: nodeName,
      data: { label: nodeName },
      position: { x: 0, y: 0 },
      type: "input",
    };
  });

  return nodes;
}

export default App;
