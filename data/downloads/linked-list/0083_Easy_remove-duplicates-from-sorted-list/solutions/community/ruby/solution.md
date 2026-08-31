# simple ruby solution

**Author:** Yushi_Meng
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/320402/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/320402/)

---

```
def delete_duplicates(head)
    result = head
    while head!=nil && head.next!=nil
        case 
            when head.val == head.next.val 
                then head.next = head.next.next
            else
                head = head.next
            end    
    end     
    return result
end
```