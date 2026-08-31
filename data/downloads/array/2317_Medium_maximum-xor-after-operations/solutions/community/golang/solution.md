# Go | Golang | Explanation | O(n)

**Author:** camusabsurdo
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-xor-after-operations/solutions/2199901/](https://leetcode.com/problems/maximum-xor-after-operations/solutions/2199901/)

---

```
func maximumXOR(nums []int) (ans int) { 
    /*
    So suppose after doing xor [3,2,4,6] we're getting 3

            3 => 0 0 1 1
            2 => 0 0 1 0
            4 => 0 1 0 0
            6 => 0 1 1 0
          xor => 0 0 1 1
          
          The xor result can be maximised if either 4 became 0 or 6 became 2 using the operations described. Now the key to notice here is that we actually don't need to perform the operations since we are only interested in the maximisation and not the order of operations and that leads us to realise that we can effectively chose to Bitwise OR the elements (instead of the proposed XOR) and our work is done.
    */
    for _,num:=range nums{
        ans |=num
    }
    return
}