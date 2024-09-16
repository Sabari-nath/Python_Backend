from typing import Dict, List
from interfaces import GraphAnalyzer

class DFSGraphAnalyzer(GraphAnalyzer):
    def is_dag(self, graph: Dict[str, List[str]]) -> bool:
        visited = set()
        rec_stack = set()

        def dfs(node):
            if node in rec_stack:
                return False
            if node in visited:
                return True

            visited.add(node)
            rec_stack.add(node)
            for neighbor in graph.get(node, []):
                if not dfs(neighbor):
                    return False
            rec_stack.remove(node)
            return True

        for node in graph:
            if node not in visited:
                if not dfs(node):
                    return False
        return True
