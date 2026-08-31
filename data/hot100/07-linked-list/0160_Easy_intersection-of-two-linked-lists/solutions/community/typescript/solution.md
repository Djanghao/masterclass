# O(n+m), O(1) space || Two Pointer || Easy Understanding with explanation and Comments

**Author:** ahmedwelhakim
**Votes:** 3
**Link:** [https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/2511001/](https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/2511001/)

---

We will make both of them of equal length, by moving the first pointer from A to B, and the other pointer from B to A.
For Example 
List A : [ 1, 2, 3, 4, 5, 6, 7, 8, null]
List B : [ 9, 10, 7, 8, null]
List A to B : [ 1,  2, 3, 4, 5, 6, 7, 8, null, 9, 10, 7, 8, null]
List B to A : [ 9, 10, 7, 8, null, 1, 2, 3, 4, 5,  6, 7, 8, null]
So We can Notice that if their is intersection it will be at the end; either both of them will meet at first intersection or at null if their is no intersection.
		   
```TypeScript           
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let ptr1 = headA; // will move from list A to List B
    let ptr2 = headB; // will move from List B to List A
    while (ptr1 != ptr2) {
		// if ptr1 reach the first null then we switch to List B.
        ptr1 = ptr1 === null ? headB : ptr1.next; 
		
		// if ptr2 reach the first null the we switch to List A.
        ptr2 = ptr2 === null ? headA : ptr2.next; 
		
		/*
			Note: I keep saying the first null beacuse at the second null (in case of no intersection)
			both of ptr1 and ptr2 will be equal, so the While loop will break before the switch to happen again.
		*/
    }
	// simply we can return either ptr1 or ptr2 as both are equal to either the first intersection or to null.
    return ptr1;
};
```