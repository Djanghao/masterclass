# Simple Python3 Solution Using 2 Locks [OS]

**Author:** sagar_chaudhari
**Votes:** 5
**Link:** [https://leetcode.com/problems/building-h2o/solutions/2336068/](https://leetcode.com/problems/building-h2o/solutions/2336068/)

---

	from threading import Lock
	class H2O:
		def __init__(self):
			self.lock1=Lock()
			self.lock2=Lock()
			self.lock2.acquire()
			self.count=0
		def hydrogen(self, releaseHydrogen: 'Callable[[], None]') -> None:

			# releaseHydrogen() outputs "H". Do not change or remove this line.
			self.lock1.acquire()
			releaseHydrogen()
			self.count+=1
			if self.count%2==0:
				self.lock2.release()
			else:
				self.lock1.release()

		def oxygen(self, releaseOxygen: 'Callable[[], None]') -> None:
			self.lock2.acquire()
			# releaseOxygen() outputs "O". Do not change or remove this line.
			releaseOxygen()
			self.lock1.release()