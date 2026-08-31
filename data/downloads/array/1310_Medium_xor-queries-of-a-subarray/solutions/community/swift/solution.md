# Swift

**Author:** shams24x7
**Votes:** 2
**Link:** [https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/5778697/](https://leetcode.com/problems/xor-queries-of-a-subarray/solutions/5778697/)

---

# Intuition
The problem requires calculating the XOR of elements in a subarray for multiple queries. Instead of recalculating the XOR for each query, we can use a prefix XOR approach. The XOR from any index i to j can be computed efficiently using the property:  
XOR(i to j) = prefixXOR(j + 1) ^ prefixXOR(i).

By precomputing the prefix XORs, we reduce the time required to answer each query to constant time.
# Approach

1. Prefix XOR Calculation: 
   - We compute a prefix XOR array where each element at index i stores the XOR of all elements from the start of the array up to i-1. This allows us to quickly calculate the XOR of any subarray.
   
2. Processing Queries:
   - For each query, which consists of a pair of indices [left, right], we compute the XOR of the subarray from left to right using the formula:  
     result = prefixXOR[left] ^ prefixXOR[right + 1]
   - This uses the fact that XOR of a range of numbers can be derived from the XORs of the numbers up to the boundaries of that range.

# Complexity
Time Complexity:
- Prefix XOR computation:  
  This takes O(n), where n is the length of the array arr, since we traverse the array once to compute the prefix XORs.
  
- Processing each query:  
  Each query can be answered in constant time O(1) by accessing the precomputed prefix XOR array. Given q queries, this part takes O(q) in total.

So, the total time complexity is:  
O(n + q), where n is the length of the array and q is the number of queries.

Space Complexity:
- We use an additional array xors of size n + 1 to store the prefix XORs.  
- The result array ans takes space proportional to the number of queries q.

Thus, the total space complexity is:  
O(n + q)

# Code
```swift []
class Solution {
    func xorQueries(_ arr: [Int], _ queries: [[Int]]) -> [Int] {
        var ans = [Int]()
        var xors = [Int](repeating: 0, count: arr.count + 1)

        // Calculate prefix XORs
        for i in 0..<arr.count {
            xors[i + 1] = xors[i] ^ arr[i]
        }

        // Process each query
        for query in queries {
            let left = query[0]
            let right = query[1]
            ans.append(xors[left] ^ xors[right + 1])
        }

        return ans
    }
}

```