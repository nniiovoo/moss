import * as erc from "@themoss/erc";
import * as kuru from "@themoss/protocol-kuru";
import * as morpho from "@themoss/protocol-morpho";
import * as pancakeswap from "@themoss/protocol-pancakeswap";
import * as system from "@themoss/system";

/** Protocol modules selected by the default MCP CLI application. */
export const defaultProtocolModules = [system, erc, kuru, morpho, pancakeswap] as const;
