class SQL:

    def __init__(self, names: List[str], columns: List[int]):
        

    def ins(self, name: str, row: List[str]) -> bool:
        

    def rmv(self, name: str, rowId: int) -> None:
        

    def sel(self, name: str, rowId: int, columnId: int) -> str:
        

    def exp(self, name: str) -> List[str]:
        


# Your SQL object will be instantiated and called as such:
# obj = SQL(names, columns)
# param_1 = obj.ins(name,row)
# obj.rmv(name,rowId)
# param_3 = obj.sel(name,rowId,columnId)
# param_4 = obj.exp(name)