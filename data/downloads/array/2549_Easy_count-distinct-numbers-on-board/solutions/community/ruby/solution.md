# 2 Solutions

**Author:** Chris1337
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/4797119/](https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/4797119/)

---


# Code
```
# @param {Integer} n
# @return {Integer}
def distinct_integers(n)
    # Solution 1
    if n == 1
        return 1
    else
        return n-1
    end

    # Solution 2(slow)
    boards_queue = [n]
    initial_n = n
    while boards_queue.size > 0
        n = boards_queue.shift
        i = initial_n
        while i > 1
            if (n % i == 1)
                boards_queue << i
                board_set << i
            end
            i -= 1
        end
    end

    board_set.size
end
```