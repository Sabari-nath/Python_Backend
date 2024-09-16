from typing import Dict, List, Protocol

class GraphAnalyzer(Protocol):
    def is_dag(self, graph: Dict[str, List[str]]) -> bool:
        ...

class PipelineParser(Protocol):
    def parse(self, pipeline: dict) -> dict:
        ...
