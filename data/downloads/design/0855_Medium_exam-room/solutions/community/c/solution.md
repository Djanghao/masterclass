# C++: Using ordered set

**Author:** vmk1802
**Votes:** 33
**Link:** [https://leetcode.com/problems/exam-room/solutions/1199246/](https://leetcode.com/problems/exam-room/solutions/1199246/)

---

# Logic
1. Ordered set is used to store occupied seats
2. Distance between candidate seat and the nearest seat is calculated as below
	* If end seats 0 or n-1 are empty, the distance between the nearest seat is same as difference between occupied seat and the end candidate seat
	* For seats in between. the distance is half way between two occupied seats

Time complexity of seat() routine is N seats multiplied by log(N) which is Nlog(N) in worst case.
leave() routine time complexity is log(N)

```
class ExamRoom {
private:
	set<int> seats;
	int capacity;

public:

	ExamRoom(int N)
	{
		capacity = N;
	}

	int seat()
	{
		int dist = 0;
		int curr = 0;

		if (!seats.empty()) {
			auto itr = seats.begin();
            
            //calculate distance at the begining
			dist = *itr;

			if (dist == 0) {
				itr++;
			}
            
            //calculate distance in between
			while (itr != seats.end()) {
                int mid_dist = (*itr - *prev(itr)) / 2;
				if (dist < mid_dist) {
					dist = mid_dist;
					curr = *prev(itr) + dist;
				}
				itr++;
			}
            
            //calculate distance at the end
			if (dist < ((capacity - 1) - *(seats.rbegin()))) {
				curr = capacity - 1;
			}
		}

		return *(seats.insert(curr).first);
	}

	void leave(int p)
	{
		seats.erase(p);
	}
};
```