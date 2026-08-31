# Only 4 Lines of Code, High Level Solution,  Explained All Coding Steps

**Author:** onka13
**Votes:** 123
**Link:** [https://leetcode.com/problems/add-two-numbers/solutions/3077723/](https://leetcode.com/problems/add-two-numbers/solutions/3077723/)

---

# Approach
This is a simple addition flow. 
1. 2 numbers like ( 743, 564  )
2. Start from the left to right ( loop - index)
3. Get the number by index ( index = 0 => 7, 5 )
4. Add those numbers ( 7 + 5 => 12 )
5. Carry it if it is greater than 9 ( var carry = 12 / 10 => 1 )
6. Increase the index ( index + 1 )
7. Go to step 3 ( We need to pass carry value )

let's revise the steps

3. Get the number by index ( index = 1 => 4, 6 )
4. Add those numbers and carry ( 4 + 6 + 1)
5. Carry it if it is greater than 9 ( var carry = 11 / 10 => 1 )
6. Increase the index ( index + 1 => 2 )
7. Go to step 3 ( We need to pass carry value )

Actually it is done if we know all the number places and length of the numbers.

However we don't know it. It is a linked list. So we don't have the length and index. But we can use infinity loops. Let's start with a while loop.

1_) let's start coding
```
while(true)
{
	// step-3 : l1.val and l2.val 
	// step-4
	int total = l1.val + l2.val;
	// step - 5
	int carry = total / 10;
    int val = total % 10;
	// step-6 : we don't have index but we have l1 and l2, so we can set them for the next loop
	l1 = l1.next;
	l2 = l2.next;
    // We need to store the val field and set the next field in the next loop, it seems a perfect sample for recursive methods
   // let's create a method then
} 
```
2_) we need pass value of 1 and 2 and carry values

```
newMethod(int val1, int val2, int carry, ListNode next1, ListNode next2)
{
	int total = val1 + val2;
	carry = total / 10;
	int place = total % 10;
	return new ListNode(place, /* we need to do the same for the next values */)
}
```

3_) make it recursive. You can run the program and see the errors.

```
newMethod(ListNode next1, ListNode next2, int carry)
{
	int total = next1.val + next2.val + carry;
	carry = total / 10;
	int val = total % 10;
	return new ListNode(val, newMethod(next1.next, next2.next, carry))
}


public ListNode AddTwoNumbers(ListNode l1, ListNode l2) 
{
	return newMethod(l1, l2, 0);
}
```

4_) add null check

```
newMethod(ListNode next1, ListNode next2, int carry)
{
	int total = (next1 != null ? next1.val : 0) + (next2 != null ? next2.val : 0) + carry;
	carry = total / 10;
	return new ListNode(total % 10, newMethod(next1?.next, next2?.next, carry))
}
```

5_) stop the recursive method when next1 and next2 null

```
newMethod(ListNode next1, ListNode next2, int carry)
{
	if(next1 == null && next2 == null && carry == 0) return null;

	int total = (next1 != null ? next1.val : 0) + (next2 != null ? next2.val : 0) + carry;
	carry = total / 10;
	return new ListNode(total % 10,  newMethod(next1?.next, next2?.next, carry))
}
```

6_) AddTwoNumbers and newMethod are almost same parameters. So if I add carry as an optional parameter, it would be great.
```
public ListNode AddTwoNumbers(ListNode l1, ListNode l2, int carry = 0) 
{
	if(l1 == null && l2 == null && carry == 0) return null;

	int total = (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0) + carry;
	carry = total / 10;
	return new ListNode(total % 10,  AddTwoNumbers(l1?.next, l2?.next, carry));
}

```

>  You can also use `l1?.val ?? 0` instead of using ternary operators.

> JS version: `l1?.val || 0`


# Final Code C#
```
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution 
{
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2, int carry = 0) 
    {
        if(l1 == null && l2 == null && carry == 0) return null;

        int total = (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0) + carry;
        carry = total / 10;
        return new ListNode(total % 10,  AddTwoNumbers(l1?.next, l2?.next, carry));
    }
}
```


# Final Code Typescript
```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null, carry: number = 0): ListNode | null {
    if(!l1 && !l2 && !carry) return null;

    var total : number = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
    carry = parseInt(total / 10 + '');
    return new ListNode(total % 10, addTwoNumbers(l1?.next, l2?.next, carry));
};
```

# Final Code Javascript
```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, carry) {
    if(!l1 && !l2 && !carry) return null;

    var total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
    carry = parseInt(total / 10);
    return new ListNode(total % 10, addTwoNumbers(l1?.next, l2?.next, carry));
};
```

