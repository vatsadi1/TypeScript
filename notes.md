# 🚀 TypeScript Learning Notes

## 📌 Why TypeScript?
TypeScript is a **superset of JavaScript** that adds:
- Static typing
- Better error detection
- Scalable code structure

---

## ⚙️ TypeScript Compiler Flow

```mermaid
graph LR
    A[TS Code] --> B[Lexer]
    B --> C[Parser]
    C --> D[AST (Abstract Syntax Tree)]
    D --> E[Binder]
    E --> F[Checker]
    F --> G[Emitter]
    G --> H[JavaScript Output]

    %% Extra Details
    B --> B1[Tokenization: breaks code into tokens]
    C --> C1[Builds syntax structure]
    D --> D1[Tree representation of code]
    E --> E1[Creates Symbol Table]
    F --> F1[Type Checking & Error Detection]
    G --> G1[Removes types & generates JS]
