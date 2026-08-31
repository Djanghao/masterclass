# scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/walking-robot-simulation-ii/solutions/5738540/](https://leetcode.com/problems/walking-robot-simulation-ii/solutions/5738540/)

---

```scala []
class Robot(_width: Int, _height: Int) {
  val dirs = List(Vector(1,0), Vector(0,1), Vector(-1,0), Vector(0,-1), Vector(1,0))
    .sliding(2,1).map(l => l.head -> l.last).to(Map)
  val dirNames = (dirs.keys zip Iterator("East", "North", "West", "South")) .toMap
  def isValidCell(x:Int,y:Int): Boolean = x>=0 && y>=0 && x<_width && y<_height
  def validCell(pos: Seq[Int]): Seq[Int] = Vector(0 max pos.head min (_width-1), 0 max pos.last min (_height-1))
  var dir = Vector(1,0)
  var pos:Seq[Int] = Vector(0,0)
  def x = pos.head; def y = pos.last

  def step(_num: Int): Unit = {
    lazy val num = _num%(_width*4 + _height*4 - 8)
    lazy val pos1 = validCell((Vector(x,y) zip dir.map(_ * num)).map{case (a,b) => a+b})
    lazy val dist = (pos zip pos1).map{case (a,b) => (a-b).abs}.sum
    if(num>0 && dist==num) { pos=pos1}
    else if(num>0 && dist<num) { pos=pos1; dir = dirs(dir); step(num-dist)}
    else if(dist>num) ???
  }
  def getPos(): Array[Int] = Array(x,y)
  def getDir(): String = dirNames(dir)
}


/**
 * Your Robot object will be instantiated and called as such:
 * val obj = new Robot(width, height)
 * obj.step(num)
 * val param_2 = obj.getPos()
 * val param_3 = obj.getDir()
 */
```