# DFS based segment tree query and update

**Author:** HawtinZeng
**Votes:** 0
**Link:** [https://leetcode.com/problems/peaks-in-array/solutions/5353983/](https://leetcode.com/problems/peaks-in-array/solutions/5353983/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

class SegmentTree {
  size: number;
  arr: number[];
  saveData: number[];
  constructor(saveData: number[]) {
    this.size = Math.ceil(Math.log2(saveData.length + 1)) - 1;
    this.arr = new Array(this.size);
    this.saveData = saveData;
    this.build(0, 1, saveData.length - 2);
  }
  // \u9012\u5F52\u8C03\u7528\u7684\u4E00\u5B9A\u8981\u6709\u8FD4\u56DE\u503C
  build(nodeIdx, left, right) {
    const saveData = this.saveData;
    const arr = this.arr;
    if (left === right) {
      arr[nodeIdx] = saveData[left] > saveData[left-1] && saveData[left] > saveData[left+1] ? 1 : 0;
      return arr[nodeIdx];
    }
    const mid = Math.floor((left + right) / 2);

    let curCount = 0;
    curCount += this.build(2 * nodeIdx + 1, left, mid);
    curCount += this.build(2 * nodeIdx + 2, mid + 1, right);

    arr[nodeIdx] = curCount;
    return curCount;
  }

  update(idx, target) {
    this.saveData[idx] = target;
    this.updateNode(0, idx, 1, this.saveData.length - 2);
  }
  
  updateNode(nodeIdx, updateIdx, left, right) {
    // if (nodeIdx === 4) console.log(`left: ${left}, right: ${right}`);
    const { saveData } = this;
    if (updateIdx + 1 < left || updateIdx - 1 > right) {
      return this.arr[nodeIdx];
    };
    
    // console.log(`nodeIdx: ${nodeIdx}, updateIdx: ${updateIdx}, left: ${left}, right: ${right}`);
  
    if (left === right && (left === updateIdx - 1 || left === updateIdx || left === updateIdx + 1)) {
      this.arr[nodeIdx] = saveData[left] > saveData[left-1] && saveData[left] > saveData[left+1] ? 1 : 0;
      return this.arr[nodeIdx];
    }
    
    const mid = Math.floor((left + right) / 2);

    const l = this.updateNode(nodeIdx * 2 + 1, updateIdx, left, mid);
    const r = this.updateNode(nodeIdx * 2 + 2, updateIdx, mid+1,  right);
    return this.arr[nodeIdx] = l + r;
  }

  query(qLeft, qRight) {
    if (qLeft > qRight) return 0;
    return this.queryRange(0, 1, this.saveData.length - 2, qLeft, qRight);
  }

  queryRange(nodeIdx, possibleLeft, possibleRight, qLeft, qRight) {
    // console.log(`nodeIdx: ${nodeIdx}, possibleLeft: ${possibleLeft}, possibleRight: ${possibleRight}, qLeft: ${qLeft}, qRight: ${qRight}`);
    if (possibleLeft >= qLeft && possibleRight <= qRight) {
      return this.arr[nodeIdx];
    } else if (possibleLeft > qRight || possibleRight < qLeft) {
      return 0;
    }

    let count = 0;
    const mid = Math.floor((possibleLeft + possibleRight) / 2);
    if (qLeft <= mid) count += this.queryRange(nodeIdx * 2 + 1, possibleLeft, mid, qLeft, qRight);
    if (qRight >= mid + 1) count += this.queryRange(nodeIdx * 2 + 2, mid+1, possibleRight, qLeft, qRight);

    return count;
  }
}

function countOfPeaks(nums: number[], queries: number[][]): number[] {
  // range update and range query.
  const st = new SegmentTree(nums);
  const res: number[] = [];

  queries.forEach((q, idx) => {
    if (q[0] === 1) {
      res.push(st.query(q[1] + 1, q[2] - 1));
    } else if (q[0] === 2) {
      // if (idx === 1) {
        // console.log(st.arr);
        st.update(q[1], q[2]);
        // console.log(st.arr);
      // }
    }
  })
  
  return res;
};

```