## ⚙️ Section 2: TypeScript Compiler Flow

### 📊 Diagram

```mermaid
graph LR
    A[TS Code] --> B[Lexer]
    B --> C[Parser]
    C --> D[AST]
    D --> E[Binder]
    E --> F[Checker]
    F --> G[Emitter]
    G --> H[JavaScript Output]

    B --> B1[Tokenization]
    C --> C1[Syntax Structure]
    D --> D1[Tree Representation]
    E --> E1[Symbol Table]
    F --> F1[Type Checking]
    G --> G1[JS Generation]
```

## ⚙️ TypeScript Compiler Flow Breakdown

**TS Code**  
Input `.ts` file written by developer.

**Lexer (Tokenization)**  
Breaks code into tokens.  
Example:  
```ts
let x = 10;
**Parser**  
Converts tokens into structured format.

**AST (Abstract Syntax Tree)**  
Tree representation of code logic.

**Binder**  
Creates Symbol Table and manages scope (variables, functions).

**Checker**  
Performs type checking and error detection.
let x: number = "hello"; ❌
