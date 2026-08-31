# Fastest BitWise Solution - beats 100% in time and 100% in space

**Author:** whiztim
**Votes:** 12
**Link:** [https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/1344719/](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/1344719/)

---

Instead of using a tuple as most other solutions have done, you can encode the position information right into the data itself.

Points to note:
- Given limits are: `0 <= nums1[i], nums2[i] <= 100`
- The above means each **value** will fit into a 8-bits. (8bits can hold `0 - 255` unsigned)
- Given a 32bit integers, we can reuse the remaining 24 **free bits**.

Here is oour 32bit layout
	
	XXXXXXXX XXXXXXXX XXXXXXXX XXXXXXXX XXXXXXXX 
	^------------ free bits ----------^ ^-value-^

For our case, we will store the  _<index, value>_ tuple in the 32 bit integer by splitting accordingly.

Algorithm:Packing
--------------
Given an input, **U** of unpacked vectors, you want to produce an output **P** of packed vectors. 
- Start with **P** as an empty vector.
- For each item in **U**, let _<index, u-value>_ be the tuple representing the *index* of *value* in **U**.
- if value is non zero:
  - Shift *index* 8bits to the left, so that we can be in the region of **free bits**, let this be called *offsetIndex*.
  - bitwise OR *offsetIndex* with *value* to merge them. and the result be *p-value*.
  - Add *p-value* into **P**.

Algorithm:Unpacking
--------------
For this problem, we do not have to unpack it back to original, rather we simply want to unpack each *p-value* of P into a tuple of *<index, value>*.
For each, **P** of packed vectors, you want to produce a a tuple of *<index, value>*. 
- For each item *p-value* in **P**,
  - Let *index* be the result of shifting *p-value* 8bits to the right
  - Let *value* be the result of bitwise AND between *p-value* and `0b11111111` - as per diagram, this is to simply discard **free-bits** and retain all valid parts of **used**.


FullCode
--------------

Code:

```c++
class SparseVector {
    std::vector<int> data;
public:
    SparseVector(vector<int> &nums) {
        data.reserve(nums.size());
        for (auto index = 0; index < nums.size(); index++) {
            if (nums[index] > 0) {
                auto offsetPos = index << 8;
                auto masked = offsetPos | nums[index];
                data.push_back(masked);
            }
        }
    }
    
    // Return the dotProduct of two sparse vectors
    int dotProduct(SparseVector& vec) const {
        auto result = 0;
        for (auto i = 0, j = 0; i < data.size() && j < vec.data.size();) {
            auto posI = data[i] >> 8;
            auto posJ = vec.data[j] >> 8;
            if  (posI == posJ) {
                auto valI = data[i] & 0xFF;
                auto valJ = vec.data[j] & 0xFF;
                result += valI * valJ;
                i++, j++;
            } else if (posI < posJ)  {
                i++;
            } else {
                j++;
            }
        }
        return result;
    }
};

```