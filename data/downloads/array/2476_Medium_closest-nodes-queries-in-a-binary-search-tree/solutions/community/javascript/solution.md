# ❇ Closest Nodes👌 🏆O(N)❤️ Javascript❤️ Memory👀25.45%🕕 Meaningful Vars✍️ 🔴❇ ✅ 👉 💪🙏

**Author:** anurag-sindhu
**Votes:** 2
**Link:** [https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/3365884/](https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/3365884/)

---

```
var inOrderTraversal = function (root, arr = []) {
  if (!root) {
    return
  }
  inOrderTraversal(root.left, arr)
  if (root.val) {
    arr.push(root.val)
  }
  inOrderTraversal(root.right, arr)
  return arr
}

var closestNodes = function (root, queries) {
  const output = {}
  const sortedTreeElements = inOrderTraversal(root)
  let sortedTreeElementsIndex = 0
  let sortedQueriesIndex = 0

  const bucketSort = (function () {
    const maxNumber = Math.max(...queries)
    const arr = new Array(maxNumber)
    for (let index = 0; index < queries.length; index++) {
      if (arr[queries[index]] === undefined) {
        arr[queries[index]] = 0
      }
      arr[queries[index]] += 1
      console.log(arr[queries[index]])
    }
    let sortedArray = []
    for (let index = 0; index < arr.length; index++) {
      for (let indexTemp = 0; indexTemp < arr[index]; indexTemp++) {
        sortedArray.push(index)
      }
    }
    return sortedArray
  })()
  let lastElementOfSortedArray = -1
  while (bucketSort[sortedQueriesIndex] !== undefined) {
    const sortedQueriesElement = bucketSort[sortedQueriesIndex]
    const sortedTreeElement = sortedTreeElements[sortedTreeElementsIndex]

    if (sortedTreeElement === undefined) {
      output[bucketSort[sortedQueriesIndex++]] = [
        lastElementOfSortedArray,
        -1,
      ]
      continue
    }
    if (output[bucketSort[sortedQueriesIndex]] === undefined) {
      output[bucketSort[sortedQueriesIndex]] = [lastElementOfSortedArray, -1]
    }
    if (sortedQueriesElement === sortedTreeElement) {
      output[bucketSort[sortedQueriesIndex]] = [
        sortedTreeElement,
        sortedTreeElement,
      ]
      sortedQueriesIndex++
    } else if (sortedQueriesElement < sortedTreeElement) {
      output[bucketSort[sortedQueriesIndex]][1] = sortedTreeElement
      sortedQueriesIndex++
    } else if (sortedQueriesElement > sortedTreeElement) {
      output[bucketSort[sortedQueriesIndex]][0] = sortedTreeElement
      lastElementOfSortedArray = sortedTreeElement
      sortedTreeElementsIndex++
    }
  }
  const finalOutput = []
  for (const iterator of queries) {
    finalOutput.push(output[iterator])
  }
  return finalOutput
}
```