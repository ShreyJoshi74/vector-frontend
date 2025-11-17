# ⚡ Vector Frontend – AI Automation Builder UI

A visual automation builder UI inspired by tools like **n8n**, **Zapier**, and **VectorShift**.  
This interface allows users to create automation workflows using draggable nodes and connections.  
Once the workflow is submitted, the backend responds with whether the structure represents a **valid DAG (Directed Acyclic Graph)**.

---

## 🚀 Features

- 🧩 **Drag-and-drop workflow builder**
- 🔗 **Connect nodes visually** to define execution flow
- 🔍 **Supports multiple node types**  
  - Input Nodes  
  - Output Nodes  
  - LLM Nodes  
  - Text Nodes  
  - Custom logic nodes
- 📐 **Validates Directed Acyclic Graph (DAG)** through backend
- ⚛️ Built entirely with **React**
- ⚡ State management for node positions, edges, and workflow configuration
- 🔄 Real-time UI updates when nodes or edges change

---

## 🏗️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React** | UI framework |
| **React Flow / Custom Node Builder** | Draggable nodes & automation graph |
| **JavaScript** | Core logic |
| **CSS** | Styling |
| **Node/Backend** (Not included) | Validates DAG & processes automations |

---

## 📦 Installation

```bash
git clone https://github.com/<your-username>/vector-frontend.git
cd vector-frontend
npm install
npm start
