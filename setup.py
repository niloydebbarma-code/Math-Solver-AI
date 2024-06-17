from setuptools import setup, find_packages

setup(
    name="math_solver_ai",
    version="0.1",
    packages=find_packages(),
    install_requires=[
        "sympy",
        "matplotlib",
        "numpy",
    ],
    author="Niloy Deb Barma",
    author_email="academicniloydebbarma@gmail.com",
    description="A package to solve mathematical problems including equations, calculus, and graph plotting.",
    long_description=open('README.md').read(),
    long_description_content_type="text/markdown",
    url="https://github.com/niloydebbarma-code/math-solver-ai",
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)
