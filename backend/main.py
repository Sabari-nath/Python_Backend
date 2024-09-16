from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from graph_analyzer import DFSGraphAnalyzer
from pipeline_parser import SimplePipelineParser
from pipeline_controller import PipelineController

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

graph_analyzer = DFSGraphAnalyzer()
pipeline_parser = SimplePipelineParser(graph_analyzer)
pipeline_controller = PipelineController(pipeline_parser)

app.include_router(pipeline_controller.get_router())

