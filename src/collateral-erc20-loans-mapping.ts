// import { BigInt } from '@graphprotocol/graph-ts';
import {
  CacheUpdated,
  CanOpenLoansUpdated,
  CollateralDeposited,
  CollateralWithdrawn,
  InteractionDelayUpdated,
  IssueFeeRateUpdated,
  LoanClosed,
  LoanClosedByLiquidation,
  LoanCreated,
  LoanDrawnDown,
  LoanPartiallyLiquidated,
  LoanRepaymentMade,
  ManagerUpdated,
  MaxLoansPerAccountUpdated,
  MinCollateralUpdated,
  MinCratioRatioUpdated,
  OwnerChanged,
  OwnerNominated,
} from '../generated/CollateralErc20/CollateralErc20';
import { Erc20Loan } from '../generated/schema';

export function handleCacheUpdated(event: CacheUpdated): void {}

export function handleCanOpenLoansUpdated(event: CanOpenLoansUpdated): void {}

export function handleCollateralDeposited(event: CollateralDeposited): void {}

export function handleCollateralWithdrawn(event: CollateralWithdrawn): void {}

export function handleInteractionDelayUpdated(event: InteractionDelayUpdated): void {}

export function handleIssueFeeRateUpdated(event: IssueFeeRateUpdated): void {}

export function handleLoanClosed(event: LoanClosed): void {}

export function handleLoanClosedByLiquidation(event: LoanClosedByLiquidation): void {}

export function handleLoanCreated(event: LoanCreated): void {
  let loanEntity = new Erc20Loan(event.params.id.toString());
  loanEntity.txHash = event.transaction.hash.toHex();
  loanEntity.save();
}

export function handleLoanDrawnDown(event: LoanDrawnDown): void {}

export function handleLoanPartiallyLiquidated(event: LoanPartiallyLiquidated): void {}

export function handleLoanRepaymentMade(event: LoanRepaymentMade): void {}

export function handleManagerUpdated(event: ManagerUpdated): void {}

export function handleMaxLoansPerAccountUpdated(event: MaxLoansPerAccountUpdated): void {}

export function handleMinCollateralUpdated(event: MinCollateralUpdated): void {}

export function handleMinCratioRatioUpdated(event: MinCratioRatioUpdated): void {}

export function handleOwnerChanged(event: OwnerChanged): void {}

export function handleOwnerNominated(event: OwnerNominated): void {}
