# C++ Segment Tree with explaination and comments

**Author:** awesson
**Votes:** 25
**Link:** [https://leetcode.com/problems/block-placement-queries/solutions/5206977/](https://leetcode.com/problems/block-placement-queries/solutions/5206977/)

---

We can use a segment tree to find the maximum element within a range in $$log(n)$$ time (see [here](https://cp-algorithms.com/data_structures/segment_tree.html) for an explaination).

For a query of type 2, we can therefore check a segment tree tracking the max gap between obstacles within the range $$[0, x]$$.

However, it gets tricky with queries of type 1. In this case we need to replace a single entry in this segment tree with 2 new ones, because some gap $$[l,r]$$, where $$l < x < r$$, will become two gaps, $$[l,x]$$ and $$[x,r]$$. Segment trees do not allow for inserts or removals, so we can't do this directly.

However,
- Segment trees do allow for updating an existing element's value.
- Since we are querying for the max, a value of `0` is essentially an "empty" entry so we can initialize the segment tree with all zeros.
- We know there is a limit of $$5*10^4$$ for obstacle placement and obstacles are placed discretely and uniquely.

Given this, we can insert gap values such that they represent the gap from that obstacle index going back to the previous one, and all the `0`'s in-between obstacles will just be ignored. 

The "*remove and insert two new elements*" becomes "*update two existing elements*". In particular, one already non-zero element gets decreased at index $$r$$, and another 0 element gets "set" at index $$x$$.

In order to find index $$r$$, we can keep track of all existing obstacles in an ordered set and find it in $$log(n)$$ time with `lower_bound(x)`.

# Complexity
- Time complexity: $$O(n*log(n))$$ -->

- Space complexity: $$O(n)$$

# Code
```
constexpr int MaxX = 50001;

class SegTree;

class Solution
{
public:
	vector<bool> getResults(vector<vector<int>>& queries)
	{
		SegTree seg(MaxX);
		set<int> obs;
        // Consider the max x and 0 as existing obstacles
		obs.insert(0);
		obs.insert(MaxX);

		vector<bool> ans;
		for (auto& q : queries)
		{
			int x = q[1];
			if (q[0] == 1)
			{
                // x will never already exist in obs, so the returned itr will
                // always be r of the existing gap and l will be the prevous one
				auto itr = obs.upper_bound(x);
				int r = *itr;
				int l = *(--itr);
				obs.insert(x);
				seg.UpdateValue(x, x - l);
				seg.UpdateValue(r, r - x);
			}
			else
			{
				int sz = q[2];
                // First check the segment tree for the max gap before x
				bool isValid = seg.GetMax(x) >= sz;
                // But if we don't find one,
                // then we should also check the gap which x falls into
                // as there is the space from [l,x] which is not accounted for
                // in the segment tree if no obstable exists at x
				if (!isValid)
				{
					auto itr = obs.lower_bound(x);
					if (*itr != x)
					{
                        int l = *(--itr);
						isValid = (x - l) >= sz;
					}
				}
				ans.push_back(isValid);
			}
		}

		return ans;
	}
};

class SegTree
{
public:
	SegTree(int _n)
	{
		n = _n;
		tree.resize(n * 4, 0);
	}

	int GetMax(int x) const
	{
		return GetRangeValueInternal(0, x, 1, 0, n - 1);
	}

	void UpdateValue(int index, int newValue)
	{
		UpdateValueInternal(index, newValue, 1, 0, n - 1);
	}

private:
	int GetRangeValueInternal(int left, int right, int nodeIndex, int nodeRangeLeftIndex, int nodeRangeRightIndex) const
	{
		if (left > right)
			return 0;

		if (left == nodeRangeLeftIndex && right == nodeRangeRightIndex)
			return tree[nodeIndex];

		int rangeMid = (nodeRangeLeftIndex + nodeRangeRightIndex) / 2;
		int leftV = GetRangeValueInternal(left, min(right, rangeMid), nodeIndex * 2, nodeRangeLeftIndex, rangeMid);
		int rightV = GetRangeValueInternal(max(left, rangeMid + 1), right, nodeIndex * 2 + 1, rangeMid + 1, nodeRangeRightIndex);
		return max(leftV, rightV);
	}

	void UpdateValueInternal(int index, int newValue, int nodeIndex, int nodeRangeLeftIndex, int nodeRangeRightIndex)
	{
		if (nodeRangeLeftIndex == nodeRangeRightIndex)
		{
			tree[nodeIndex] = newValue;
			return;
		}

		int mid = (nodeRangeLeftIndex + nodeRangeRightIndex) / 2;
		int leftChild = nodeIndex * 2;
		int rightChild = leftChild + 1;
		if (index <= mid)
		{
			UpdateValueInternal(index, newValue, leftChild, nodeRangeLeftIndex, mid);
		}
		else
		{
			UpdateValueInternal(index, newValue, rightChild, mid + 1, nodeRangeRightIndex);
		}
		tree[nodeIndex] = max(tree[leftChild], tree[rightChild]);
	}

	int n;
	vector<int> tree;
};
```