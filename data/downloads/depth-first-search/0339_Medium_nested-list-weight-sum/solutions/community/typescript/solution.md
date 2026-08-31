# Typescript | Javascript | Simple recursion

**Author:** OsidAbu-Alrub
**Votes:** 1
**Link:** [https://leetcode.com/problems/nested-list-weight-sum/solutions/2602898/](https://leetcode.com/problems/nested-list-weight-sum/solutions/2602898/)

---

```
function depthSum(nestedList: NestedInteger[]): number {
  return helper(nestedList, 1);
};

function helper(nestedList: NestedInteger[], depth: number){
  let sum = 0;
  for(const element of nestedList){
    if(element.isInteger()){
      sum += element.getInteger() * depth;
    }
    else {
      sum += helper(element.getList(), depth + 1);
    }
  }
  return sum;
}
```