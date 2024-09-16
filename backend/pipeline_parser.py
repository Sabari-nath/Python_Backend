from interfaces import GraphAnalyzer, PipelineParser

class SimplePipelineParser(PipelineParser):
    def __init__(self, graph_analyzer: GraphAnalyzer):
        self.graph_analyzer = graph_analyzer

    def parse(self, pipeline: dict) -> dict:
        nodes = pipeline.get('nodes', [])
        edges = pipeline.get('edges', [])

        num_nodes = len(nodes)
        num_edges = len(edges)

        graph = {}
        for edge in edges:
            source = edge['source']
            target = edge['target']
            if source not in graph:
                graph[source] = []
            graph[source].append(target)

        is_dag = self.graph_analyzer.is_dag(graph)

        return {
            "num_nodes": num_nodes,
            "num_edges": num_edges,
            "is_dag": is_dag
        }
