from fastapi import APIRouter, Body
from interfaces import PipelineParser

class PipelineController:
    def __init__(self, parser: PipelineParser):
        self.parser = parser
        self.router = APIRouter()
        self.setup_routes()

    def setup_routes(self):
        @self.router.post('/pipelines/parse')
        def parse_pipeline(pipeline: dict = Body(...)):
            return self.parser.parse(pipeline)

    def get_router(self):
        return self.router
