# Simple C# : Using List of Tuple and 2 pointers approach

**Author:** Tabrej
**Votes:** 2
**Link:** [https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/1337362/](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/1337362/)

---

```
public class SparseVector {
    
    //Using named tuple instead of Dictionary to avoid hashing penalty in large collection
    //Named tuple are better compared to generic tuples for readability of the code 
    public List<(int index, int value)> sparseVector {get; private set;}
    
    public SparseVector(int[] nums) {
        sparseVector = new List<(int, int)>();
        for(int i=0; i < nums.Length; i++)
        {
            //Add the tuple ofindex and value in the list when value is non-zero
            if(nums[i] != 0) 
            {
                (int index, int value) tupleIndexValue = (i, nums[i]);
                sparseVector.Add(tupleIndexValue);
            }
        }        
    }
    
    // Return the dotProduct of two sparse vectors
    public int DotProduct(SparseVector vec) {
        int sum =0, firstItr=0, secodnItr=0;
        
        //iterate through both vectors and multiply when the index matches
        while(firstItr < sparseVector.Count && secodnItr < vec.sparseVector.Count)
        {
            if(sparseVector[firstItr].index == vec.sparseVector[secodnItr].index)
            {
                sum+= sparseVector[firstItr].value * vec.sparseVector[secodnItr].value;
                firstItr++;
                secodnItr++;
            }
            else if (sparseVector[firstItr].index < vec.sparseVector[secodnItr].index) firstItr++;
            else secodnItr++;
        }
        return sum;        
    }
}

// Your SparseVector object will be instantiated and called as such:
// SparseVector v1 = new SparseVector(nums1);
// SparseVector v2 = new SparseVector(nums2);
// int ans = v1.DotProduct(v2);
```