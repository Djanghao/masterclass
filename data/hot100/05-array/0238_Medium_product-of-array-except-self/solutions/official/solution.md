# Official Solution

**Link:** [https://leetcode.com/problems/product-of-array-except-self/solution/](https://leetcode.com/problems/product-of-array-except-self/solution/)

---

[TOC]

## Video Solution

---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/574160642" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution

From the looks of it, this seems like a simple enough problem to solve in linear time and space. We can simply take the product of all the elements in the given array and then, for each of the elements $$x$$ of the array, we can simply find `product of array except self` value by dividing the product by $$x$$. 

Doing this for each of the elements would solve the problem. However, there's a note in the problem which says that we are not allowed to use division operation. That makes solving this problem a bit harder. 
<br/>
<br/>

---

### Approach 1: Left and Right product lists

It's much easier to build an intuition for solving this problem without division once you visualize how the different `products except self` look like for each of the elements. So, let's take a look at an example array and the different products.

<center>
<img src="../Figures/238/diag-1.png" width="700"></center>

Looking at the figure about we can figure another way of computing those different product values. 

>Instead of dividing the product of all the numbers in the array by the number at a given index to get the corresponding product, we can make use of the product of all the numbers to the left and all the numbers to the right of the index. Multiplying these two individual products would give us the desired result as well.

For every given index, $$i$$, we will make use of the product of all the numbers to the left of it and multiply it by the product of all the numbers to the right. This will give us the product of all the numbers except the one at the given index $$i$$. Let's look at a formal algorithm describing this idea more concretely.

**Algorithm**

1. Initialize two empty arrays, `L` and `R` where for a given index `i`, `L[i]` would contain the product of all the numbers to the left of `i` and `R[i]` would contain the product of all the numbers to the right of `i`. 
2. We would need two different loops to fill in values for the two arrays. For the array `L`, $$L[0]$$ would be `1` since there are no elements to the left of the first element. For the rest of the elements, we simply use $$L[i] = L[i - 1] * nums[i - 1]$$. Remember that `L[i]` represents product of all the elements *to the left of element at index i*.
3. For the other array, we do the same thing but in reverse i.e. we start with the initial value of `1` in $$R[length - 1]$$ where $$length$$ is the number of elements in the array, and keep updating `R[i]` in reverse. Essentially, $$R[i] = R[i + 1] * nums[i + 1]$$. Remember that `R[i]` represents product of all the elements *to the right of element at index i*.
4. Once we have the two arrays set up properly, we simply iterate over the input array one element at a time, and for each element at index `i`, we find the `product except self` as $$L[i] * R[i]$$. 

Let's go over a simple run of the algorithm that clearly depicts the construction of the two intermediate arrays and finally the answer array.

!?!../Documents/238_anim1.json:770,460!?!

For the given array $$[4,5,1,8,2]$$, the `L` and `R` arrays would finally be:

<center>
<img src="../Figures/238/products.png" width="700"></center>

<iframe src="https://leetcode.com/playground/HrzFCqDu/shared" frameBorder="0" width="100%" height="500" name="HrzFCqDu"></iframe>

**Complexity analysis**

* Time complexity : $$O(N)$$ where $$N$$ represents the number of elements in the input array. We use one iteration to construct the array $$L$$, one to construct the array $$R$$ and one last to construct the $$answer$$ array using $$L$$ and $$R$$.
* Space complexity : $$O(N)$$ used up by the two intermediate arrays that we constructed to keep track of product of elements to the left and right.
<br/>
<br/>

---

### Approach 2: O(1) space approach

Although the above solution is good enough to solve the problem since we are not using division anymore, there's a follow-up component as well which asks us to solve this using constant space. Understandably so, the output array *does not* count towards the space complexity. This approach is essentially an extension of the approach above. Basically, we will be using the output array as one of `L` or `R` and we will be constructing the other one on the fly. Let's look at the algorithm based on this idea.

**Algorithm**

1. Initialize the empty `answer` array where for a given index `i`, `answer[i]` would contain the product of all the numbers to the left of `i`. 
2. We construct the `answer` array the same way we constructed the `L` array in the previous approach. These two algorithms are exactly the same except that we are trying to save up on space.
3. The only change in this approach is that we don't explicitly build the `R` array from before. Instead, we simply use a variable to keep track of the running product of elements to the right and we keep updating the `answer` array by doing $$answer[i] = answer[i] * R$$. For a given index `i`, `answer[i]` contains the product of all the elements to the left and `R` would contain product of all the elements to the right. We then update `R` as $$R = R * nums[i]$$

<iframe src="https://leetcode.com/playground/dX9Dpc64/shared" frameBorder="0" width="100%" height="500" name="dX9Dpc64"></iframe>

**Complexity analysis**

* Time complexity : $$O(N)$$ where $$N$$ represents the number of elements in the input array. We use one iteration to construct the array $$L$$, one to update the array $$answer$$.
* Space complexity : $$O(1)$$ since don't use any additional array for our computations. The problem statement mentions that using the $$answer$$ array doesn't add to the space complexity.
<br />