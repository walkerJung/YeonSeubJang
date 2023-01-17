# Code Convention 설정 (feat: husky + lint-staged + eslint + commitlint + prettier)

> ### husky : git hook 을 제어할수 있습니다.
>
> `npx husky-init && yarn`
>
> ### lint-staged : stage 상태의 git 파일에 대해 명령어를 실행시킵니다.
>
> `yarn add -WD lint-staged`
>
> ### eslint : 소스코드에 문제가 있는지 탐색합니다.
>
> `yarn add -WD eslint`
>
> ### commitlint : git commit message 의 convention 을 체크합니다.
>
> `yarn add -WD @commitlint/cli @commitlint/config-conventional`
>
> ### prettier : 소스코드의 포맷팅을 체크합니다.
>
> `yarn add -WD --exact prettier`

# 1. husky + commitlint

설치 후 `commitlint.config.js` 파일을 root dir 에 추가 하고

`module.exports = { extends: ["@commitlint/config-conventional"] };`

내용을 추가해주세요.

그 후 `npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'` 를 터미널에 입력해 주세요.

.husky 아래 commit-msg 파일이 추가되면 성공입니다.

위 설정이 완료되면 commit 할때 commitlint 가 먼저 실행되어서 commit msg 를 확인합니다.

commit msg 는 아래와 같은 형식으로 작성해야 합니다.

> `<type>(<scope>)!: <short summary>`
>
> commit type : build | ci | docs | feat | fix | perf | refactor | test
>
> commit scope(option) : animations | common | upgrade ...
>
> commit msg : 커밋에 대한 간단한 설명
>
> ex) git commit -m "feat: code convention init"

# 2. husky + prettier
