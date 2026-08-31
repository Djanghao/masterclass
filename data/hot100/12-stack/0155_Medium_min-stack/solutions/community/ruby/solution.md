# Two stacks make it simply using ruby (96ms)

**Author:** ThirteenBeans
**Votes:** 3
**Link:** [https://leetcode.com/problems/min-stack/solutions/49253/](https://leetcode.com/problems/min-stack/solutions/49253/)

---

    class MinStack
        def initialize
            @mins, @stack = [], []
        end
    
        def push(x)
            @stack.push x
            @mins.push x if @mins.empty? or x <= @mins.last
        end
    
        def pop
            @mins.pop if @stack.pop == @mins.last
        end
    
        def top
            @stack.last
        end
    
        def get_min
            @mins.last
        end
    end


@mins is the array used to save  appeared minimums still existing in @stack.