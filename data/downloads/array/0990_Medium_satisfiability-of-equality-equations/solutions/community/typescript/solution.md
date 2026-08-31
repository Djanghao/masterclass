# Typescript | Javascript | Union find | With comments

**Author:** OsidAbu-Alrub
**Votes:** 1
**Link:** [https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/2589518/](https://leetcode.com/problems/satisfiability-of-equality-equations/solutions/2589518/)

---

```
function equationsPossible(equations: string[]): boolean {
  const parents = new Map<string, string>();
  for(let i = 0 ; i < 26 ; i++){
    parents.set(String.fromCharCode(i + 97), String.fromCharCode(i + 97));
  }

  // link all the operands that are equal to one root
  for(const equation of equations){
    if(equation.includes("==")){
      const [leftOperand, rightOperand] = equation.split("==");
      union(leftOperand, rightOperand, parents);
    }
  }
  
  // Check all the non-equal equations
  // if any of them link to same parent
  // then we know we have a contradiction
  for(const equation of equations){
    if(equation.includes("!=")){
      const [leftOperand, rightOperand] = equation.split("!=");
      const leftRootParent = find(leftOperand, parents);
      const rightRootParent = find(rightOperand, parents);
      if(leftRootParent === rightRootParent) return false;
    }
  }
  
  return true;
};

function union(x: string, y: string, parents: Map<string, string>){
  const xRoot = find(x, parents);
  const yRoot = find(y, parents);
  if(xRoot === yRoot) return true;
  parents.set(yRoot, xRoot);
  return false;
}

function find(child: string, parents: Map<string, string>){
  while(child !== parents.get(child))
    child = parents.get(child);
  return child;
}
```