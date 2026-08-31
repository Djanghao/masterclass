# Solution

**Author:** deleted_user
**Votes:** 216
**Link:** [https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/2997641/](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/2997641/)

---

```C++ []
class Solution {
 public:
  int findKthNumber(long n, int k) {
    auto getGap = [&n](long a, long b) {
      long gap = 0;
      while (a <= n) {
        gap += min(n + 1, b) - a;
        a *= 10;
        b *= 10;
      }
      return gap;
    };

    long currNum = 1;

    for (int i = 1; i < k;) {
      long gap = getGap(currNum, currNum + 1);
      if (i + gap <= k) {
        i += gap;
        ++currNum;
      } else {
        ++i;
        currNum *= 10;
      }
    }

    return currNum;
  }
};
```

```Python3 []
class Node:
    def __init__(self, val):
        self.val = val
        self.nextNodes = []

    def __eq__(self, other):
        return self.val == other

class Solution:
    def generateTrieTree(self, data: list):
        root = Node(None)
        for intChar in data:
            pointer = root
            for char in intChar:
                try:
                    existedNodeIdx = pointer.nextNodes.index(char)
                    pointer = pointer.nextNodes[existedNodeIdx]
                except:
                    newNode = Node(char)
                    pointer.nextNodes.append(newNode)
                    pointer = newNode
        return root

    def findKthNumber(self, n: int, k: int) -> int:
        result = 1
        k -= 1
        while k > 0:
            count = 0
            interval = [result, result + 1]
            while interval[0] <= n:
                count += (min(n + 1, interval[1]) - interval[0])
                interval = [10 * interval[0], 10 * interval[1]]

            if k >= count:
                result += 1
                k -= count
            else:
                result *= 10
                k -= 1
        return result
        
        
        root = self.generateTrieTree([str(i) for i in range(1, n + 1)])
        output = []

        def traverse(pointer, previousVal):
            nextNodes = pointer.nextNodes
            if not nextNodes:
                return

            for node in nextNodes:
                if len(output) == k:
                    return

                newVal = previousVal + node.val
                output.append(newVal)
                traverse(node, newVal)

        traverse(root, "")
        return int(output[-1])
```

```Java []
class Solution {
    public int findKthNumber(int n, int k) {
        int prefix=1;
        for(int count=1;count<k;){
            int currCount=getCountWithPrefix(prefix,prefix+1,n);
            if(currCount+count<=k){
                count+=currCount;
                prefix++;
            }else{
                prefix*=10;
                count++;
            }
        }
        return prefix;
    }
    private int getCountWithPrefix(long startPrefix,long endPrefix,int max){
        int count=0;
        while(startPrefix<=max){
            count+=Math.min(max+1,endPrefix)-startPrefix;
            startPrefix*=10;
            endPrefix*=10;
        }
        return count;
    }
}
```
