# Scala

**Author:** fairgrieve
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-authentication-manager/solutions/2089159/](https://leetcode.com/problems/design-authentication-manager/solutions/2089159/)

---

```
import scala.collection.mutable

class AuthenticationManager(timeToLive: Int) {
  private val tokenToExpiryTime = mutable.Map.empty[String, Int]

  def generate(tokenId: String, currentTime: Int) {
    tokenToExpiryTime(tokenId) = currentTime + timeToLive
  }

  def renew(tokenId: String, currentTime: Int) {
    tokenToExpiryTime.updateWith(tokenId) {
      _.collect { case expiryTime if expiryTime > currentTime => currentTime + timeToLive }
    }
  }

  def countUnexpiredTokens(currentTime: Int): Int = {
    tokenToExpiryTime.valuesIterator.count(_ > currentTime)
  }
}
```