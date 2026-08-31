# Ruby || Beats 100% || Reverse and Traverse

**Author:** pharmac1st
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-two-numbers-ii/solutions/3775969/](https://leetcode.com/problems/add-two-numbers-ii/solutions/3775969/)

---

```

def reverse_list(head)
    prev = nil
    current = head
    while current
        n = current.next 
        current.next = prev
        prev = current
        current = n 
    end 
    return prev
end

def add_two_numbers(l1, l2)
    
    l1 = reverse_list(l1)
    l2 = reverse_list(l2)


    e = true 
    sum = []
    carry = 0
    while  (e)
        s = nil
        e = false
        if (l1)
            e = true 
            s = l1.val
            l1 = l1.next
        end
        if (l2)
            e = true
            s != nil ? s += l2.val : s=l2.val
            l2 = l2.next
        end
        if (s)
            m = (s + carry)
            remainder = m % 10
            carry = 0
            if (remainder != m)
                carry = 1
                sum << remainder
            else 
                sum << m
            end
        end
    end 
    sum.push(1) if (carry == 1)
    sum.reverse()
end
```