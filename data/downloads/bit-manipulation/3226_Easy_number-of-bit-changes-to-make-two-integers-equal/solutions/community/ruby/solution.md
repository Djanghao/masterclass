# Simple Solution with comments.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5524822/](https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5524822/)

---


# Code
```
# @param {Integer} n
# @param {Integer} k
# @return {Integer}
def min_changes(n, k)
    k_as_binary = k.to_s(2)
    n_as_binary = n.to_s(2)
    k_one_count = k_as_binary.count("1")
    n_one_count = n_as_binary.count("1")

    # If k one count is higher than its impossible to convert n to k as
    # we can only convert 1's to 0's and not the other way around.
    if (k_one_count > n_one_count) || (k_as_binary.size > n_as_binary.size)
        return -1
    else
        # Determine the answer.

        # First reduce n to k size by replacing 1 leading chars to zeros
        # and for each 1 we convert, incremement answer.
        answer = 0
        if n_as_binary.size > k_as_binary.size 
            diff = n_as_binary.size - k_as_binary.size 
            i = 0
            while i < diff
                if n_as_binary[0] == "1"
                    n_as_binary[0] = ""
                    answer += 1
                else
                    n_as_binary[0] = ""
                end
                i += 1
            end
        end

        # Increment answer by each time we convert 1 to 0.
        # If we have a 1 in k and a 0 in n at the same index
        # we return -1 as it's impossible to do the
        # conversion.
        i = 0
        while i < k_as_binary.size
            if k_as_binary[i] == "1" and n_as_binary[i] == "0"
                return -1
            elsif k_as_binary[i] == "0" and n_as_binary[i] == "1"
                answer += 1
            end  
            i += 1  
        end
        return answer
    end
    
end
```