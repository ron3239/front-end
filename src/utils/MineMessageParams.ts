import { Address } from "ton";

export type MineMessageParams = {
    expire: number;
    mintTo: Address;
    data1: bigint;
    seed: bigint;
    data2?: bigint;
}