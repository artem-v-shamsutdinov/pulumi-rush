# pulumi-rush
Making pulumi with with Microsoft Rush

I had trouble making pulumi work with Microsoft Rush mono-repo.
Here is how I got it to work:

## Steps

1. Install rollup globally
2. Run tsc in libs\ws and infra\pulumi
3. Run 'rollup -c' in infra\pulumi
4. Run 'pulumi up' in pulumi-deploy
