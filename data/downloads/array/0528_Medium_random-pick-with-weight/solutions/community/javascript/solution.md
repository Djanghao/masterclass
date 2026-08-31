# Javascript, with explanation and very interesting find regarding {} vs Map...

**Author:** paultman
**Votes:** 38
**Link:** [https://leetcode.com/problems/random-pick-with-weight/solutions/671804/](https://leetcode.com/problems/random-pick-with-weight/solutions/671804/)

---

Aside from a funky description, this question is pretty straight forward, so normally I wouldn't write it up, but I did find a quirk that i'd like to share.

First, so that we are on the same page, the question is asking you to return a random index, based on a weight per index. 

I mean that, say you have [1,2,3].  The total, or sum of all the numbers is 6, so the chance of picking the first index [0] is 1/6, the chance of the second, [1] is 2/6, and the chance of the third, index [2] is 3/6.

Generate a random number and return one of those indicies.

So here is that solution, see below for my suprising result when i tried to optimize it.

```
var Solution = function(w) {
  this.weights = new Map();
  this.sum=0;
  for (let i=0; i<w.length; i++) {
    this.sum += w[i];
    this.weights.set(this.sum, i);
  }
};

Solution.prototype.pickIndex = function() {
  let index = Math.floor(Math.random() * this.sum);
  for (let key of this.weights.keys())
    if (index<key) return this.weights.get(key)
};
```

Basically you make a map, where you set the weighted possiblity, and the index.
You then pick a random number, and interate over your weighted values till you cross it and return that index.

After running, I passed, but the runtime was very slow compared to other JS submissions, i think in the bottom 20%.  I knew I could have used a binary search rather than iterating though the weights one by one, but for my first attempt to improve, I decided to switch the map object to a plain old JS object.  

It was a pretty simple change, just directly reference properties and set them, no need for function calls like set, get, keys... I could use the object/hash directly.

I thought that it would speed things up a little, using a native object but no.  Not only was it slower, but it couldnt even finish the submission, on the 55/57 test case I got a Time Limit Exceeded.  WTF.  I switched back to map and again it worked fine (albiet still slow).

So I consulted the Google.  Sure enough, in many use cases, the new Map object is faster than plain ol, native JS Objects!

Of all the pages I checked, here is the most useful:

https://medium.com/@bretcameron/how-javascript-maps-can-make-your-code-faster-90f56bf61d9d

I hope you also learned something new about object/maps like i did.  If so, please upvote this article so others can learn it too.  thanks!