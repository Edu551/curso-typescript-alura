import { Imprimivel } from "../utils/imprimivel";
import { IComparavel } from "./IComparavel";

// Uma classe não pode herdar (extends) de mais de uma classe,
//          mas pode implementar (implements) quantas interfaces desejar.

// Já uma interface pode herdar (extends) quantas interfaces desejar.
export interface IModelo<T> extends Imprimivel, IComparavel<T> {}
