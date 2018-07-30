import {main} from "./main.ts";

it('should work', () => {
    const x: number = 3;
    expect(main()).toEqual(x)
})