# Official Solution

**Link:** [https://leetcode.com/problems/similar-rgb-color/solution/](https://leetcode.com/problems/similar-rgb-color/solution/)

---

[TOC]

## Solution

--- 

### Overview

In this problem, we are given a hex code `#ABCDEF` representing a red-green-blue (RGB) color. The definition of **similarity** between two colors `#ABCDEF` and `#UVWXYZ` is:

$$Similarity = -(AB - UV)^2 - (CD - WX)^2 - (EF - YZ)^2$$

More specifically:
We split each color code into 3 sections of 2 digits in base 16, and calculate the square of the difference between the sections of two colors, as shown in the picture below:


![img](../Figures/800/800-1.png)


There are also some **special** color codes in the format of `#AABBCC` where every two digits are the same, and they can be written as `#ABC`, for example: 

![img](../Figures/800/800-3.png)

Here our task is: Among all such special color codes `#ABC` (or `#AABBCC`), we need to find the one that has the highest similarity to the given color code!

---

### Approach 1: Brute Force

#### Intuition   

Let's start with the most intuitive approach, brute force. Since we only need to look for the special color code `#ABC`, thus we can iterate over all such special colors and find the one with the highest similarity. Considering the digits are in base 16, therefore there will be a total of $$16^3$$ possible special color we shall try.

However, we can further reduce some calculations. Recall how we calculate the similarity between two colors:

![img](../Figures/800/800-1.png)

We are actually combining the three **partial similarities** into the total similarity. These partial similarities are independent of others. Therefore, we can just find the best fit for each section separately and then combine the best fits of three sections into one code color which is the color we look for. Hence, we only need to try $$16 \cdot 3$$ colors.


Since the each section of the color code is in base 16, for the convenience of our calculations, we would like to convert it into base 10 first:

$$(AB)_{16} = 16 \cdot A + B$$. 

$$(XX)_{16} = 16 \cdot X + X = 17 \cdot X$$. 

Then we can get the three partial similarities from these two values:

$$Paritial\ Similarity = -(16\cdot A + B - 17\cdot X)^2$$

Iterate over all `XX` sections and find out the one with the highest similarity to `AB`.



Let's take a look at how we find the target color for `#930613` in the following picture:

![img](../Figures/800/800-2.png)


<br>

#### Algorithm

1) Split input color `#ABCDEF` into three sections `AB`, `CD`, `EF`.
2) For each section, we iterate over all possible candidates: `00`, `11`, ... , `EE`, `FF`, and find out the one that has the highest partial similarity to this section.
3) Once we find out the best fits for all three sections (Let's call them `XX`, `YY`, and `ZZ`), combine them into one RGB color code `#XXYYZZ` and this is the target color we want. 

#### Implementation

<iframe src="https://leetcode.com/playground/bd5FXDk6/shared" frameBorder="0" width="100%" height="500" name="bd5FXDk6"></iframe>


#### Complexity Analysis


* Time complexity: $$O(1)$$

    - We split the input string into 3 sections.
    - For each section, we traverse over 16 possible candidates to find out the one with the highest similarity.
    - To sum up, the overall time complexity is $$O(1)$$
    

* Space complexity: $$O(1)$$

    - We only need to find the three components that have the highest similarity and each component will use constant space.
    - The space complexity is $$O(1)$$.


<br/>


---

### Approach 2: Rounding

#### Intuition   

Recall we converted `XX` from base 16 to base 10:

$$(XX)_{16} = 16 \cdot X + X = 17 \cdot X$$. 

We would like to find the `X` that is closest to the section `AB` from the input color code, which actually equals to find the rounded value of $$(AB)_{16} / 17$$. 


That is: $$X = round((AB)_{16} / 17)$$.



<br>

#### Algorithm

1) Similarly, we split the input color color `#ABCDEF` into three sections `AB`, `CD`, and `EF`.
2) For each section `AB`, we get the rounded value `X` of `AB` to `17`, then the best fit for this section is `XX`.
3) Once we find out the best fits for all three sections (Let's call them `XX`, `YY`, and `ZZ`), combine them into one RGB color code `#XXYYZZ` and this is the target color we want. 

#### Implementation

<iframe src="https://leetcode.com/playground/kCvZsBSQ/shared" frameBorder="0" width="100%" height="500" name="kCvZsBSQ"></iframe>


#### Complexity Analysis

* Time complexity: $$O(1)$$

    - We split the input color code into 3 sections.
    - For each section, we get the rounded value of this section over `17` to make the best fit.
    - To sum up, the overall time complexity is $$O(1)$$
    

* Space complexity: $$O(1)$$

    - We only need to find the three components that have the highest similarity and each component will use constant space.
    - The space complexity is $$O(1)$$.


<br/>