# My understanding of Boyer-Moore Majority Vote

**Author:** NikkiNicholas
**Votes:** 382
**Link:** [https://leetcode.com/problems/majority-element-ii/solutions/63537/](https://leetcode.com/problems/majority-element-ii/solutions/63537/)

---

This problem is an extension to [169. Majority Element](https://leetcode.com/problems/majority-element/), which needs Boyer-Moore Majority Vote Algorithm to find the element, whose count is over `n/2`.

When I was learning about Boyer-Moore, I was always thinking about **the pair**. I drew a picture to get myself understandable.

Suppose there are nine elements in array **A**, and the round one is the majority.

![0_1477537808895_upload-f2ddd14f-9954-4025-b77a-40137c5abf06](/uploads/files/1477537810177-upload-f2ddd14f-9954-4025-b77a-40137c5abf06.png) 

No matter in what order we select element from the array, we can only get two results

![0_1477537956098_upload-e3d23d8b-0d43-4f8f-ace1-065bd0928493](/uploads/files/1477537957428-upload-e3d23d8b-0d43-4f8f-ace1-065bd0928493.png) 

Compared to fully pairing, it is a little wasting of the partially pairing as there are some round ones are not paired (definitely it would be left). So, under the condition that the majority element exists, we could only think about **the fully pairing situation**. (It's useful when dealing with `n/3` situation)

We can consider either column as the candidate, and it's intuitive for me to get understand that the code means found a pair.

```
if candidate != element
  count -= 1
end
```

![0_1477539703014_upload-2186f2ff-dc3d-4324-a3ce-5f7ade11a2da](/uploads/files/1477539704324-upload-2186f2ff-dc3d-4324-a3ce-5f7ade11a2da.png) 

So here comes the `n/3` problem, we would only think about the fully pairing situation. If the over one third majority exists, it should be left after pairing. 

![0_1477539890642_upload-1c838025-3ff3-4fa9-ae23-abd8b7e10be9](/uploads/files/1477539893194-upload-1c838025-3ff3-4fa9-ae23-abd8b7e10be9.png)
Why would we use three elements as a pair? Because it makes sure that in fully pairing the count of majority element equals `n/3`.

That's my understanding about Boyer-Moore. Maybe it's not so clear, but it helps me think about it.

*Code*

```ruby
# Modified Boyer-Moore Majority Voting Algorithm
def majority_element(nums)
  candidate1, candidate2 = 0, 0
  count1, count2 = 0, 0

  # first round to find candidates
  nums.each do |num|
    if candidate1 == num
      count1 += 1

    elsif candidate2 == num
      count2 += 1

    elsif count1 == 0
      candidate1 = num
      count1 += 1

    elsif count2 == 0
      candidate2 = num
      count2 += 1

    else
      # This condition is important, which means a pair out,
      # filtering a set of three elements out

      count1 -= 1
      count2 -= 1
    end
  end

  # second round to confirm
  result = []
  [candidate1, candidate2].uniq.each do |candidate|
    result << candidate if nums.count(candidate) > (nums.count/3)
  end

  result
end
```

*Reference*

+ [Boyer-Moore Majority Vote algorithm and my elaboration](https://discuss.leetcode.com/topic/17564/boyer-moore-majority-vote-algorithm-and-my-elaboration) by [orbuluh](https://discuss.leetcode.com/user/orbuluh)
+ [Majority Voting Algorithm - Blog of Greg Grothaus](https://gregable.com/2013/10/majority-vote-algorithm-find-majority.html)
+ [Boyer-Moore Majority Vote Algorithm](http://www.cs.rug.nl/~wim/pub/whh348.pdf)