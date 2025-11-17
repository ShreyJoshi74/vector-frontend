

import "./submit.css";
import { useCallback } from "react";
import { shallow } from "zustand/shallow";
import { useStore } from "./store";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });

      const result = await response.json();

      alert(
        `Pipeline Summary:\n\n• Number of nodes: ${result.num_nodes}\n` +
          `• Number of edges: ${result.num_edges}\n` +
          `• Is DAG: ${result.is_dag ? "Yes ✅" : "No ❌"}`
      );
    } catch (error) {
      console.error(error);
      alert("Backend unreachable ❌");
    }
  }, [nodes, edges]);

  return (
    <div className="submit-container">
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
