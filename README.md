# pulumi-rush
Making Pulumi work with Microsoft Rush.  Rush is a tool that links peer
dependencies (from the same repository) directly into node_modules
folders (thus allowing for quicker multi-project interation cycle,
among other things).

I had trouble making Pulumi work with Microsoft Rush mono-repo.
The problem I had was Pulumi not finding my peer dependencies (
projects that the pulumi project was using).
Here is how I got it to work (TLDR - made a bundle):

## Steps

1. Globally install dependencies

npm i -g pnpm

npm i -g @microsoft/rush

npm i -g rollup

2. Run tsc in libs\ws and infra\pulumi

3. Run 'rollup -c' in infra\pulumi

4. Run 'pulumi up' in pulumi-deploy
