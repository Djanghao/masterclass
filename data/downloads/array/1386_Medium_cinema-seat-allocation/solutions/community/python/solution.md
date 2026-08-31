# Python, hashmap, explained with comments

**Author:** jcchoi
**Votes:** 26
**Link:** [https://leetcode.com/problems/cinema-seat-allocation/solutions/546758/](https://leetcode.com/problems/cinema-seat-allocation/solutions/546758/)

---

* At the first, I got Memory Limit exceed (loop whole n range).
* I changed code to care only reservedSeats (not all n range).
* If you have question, I'll try to my best to answer.

'''

	class Solution(object):
		def maxNumberOfFamilies(self, n, reservedSeats):
			"""
			:type n: int
			:type reservedSeats: List[List[int]]
			:rtype: int
			"""
			d = collections.defaultdict(list)

			# possible seats for family
			f1 = [2,3,4,5]
			f2 = [4,5,6,7]
			f3 = [6,7,8,9]
			res = 0

			# fill the dictionary, row as a key and reserved seats as a list
			for i in range(len(reservedSeats)):
				d[reservedSeats[i][0]].append(reservedSeats[i][1])

			# f as a flag to check how many families in a row
			for v in d.values():
				f = [1,1,1]
				for seat in v:
					# if reserved seat related to f1 or f2 or f3, set flag 0
					if seat in f1:
						f[0] = 0
					if seat in f2:
						f[1] = 0
					if seat in f3:
						f[2] = 0

				# it is not possible 2 more families in a row
				if f[0] == 1 or f[2] == 1:
					f[1] = 0            

				# cumulate the number of families in the current row
				res += sum(f)

			# calculate the number of row that not including reserved seats
			# we can skip these rows and just calculate numbers
			remain = (n - len(d)) * 2

			return res + remain
'''