import React from 'react'

import './styles.scss'

export default function SideMenu() {
	return (
		<div class="nav">
			<nav>
				<a href="javascript:void(0);" class="mobile-menu-trigger">Open mobile menu</a>
				<ul class="menu menu-bar">
					<li>
						<a href="javascript:void(0);" class="menu-link menu-bar-link" aria-haspopup="true">1. Multilevel mega
								menu</a>
						<ul class="mega-menu mega-menu--multiLevel">
							<li>
								<a href="javascript:void(0);" class="menu-link" aria-haspopup="true">1.1 Flyout
										link</a>
								<ul class="menu">
									<li>
											<a href="/page" class="menu-link">1.1.1 Page link</a>
									</li>
									<li>
											<a href="javascript:void(0);" class="menu-link" aria-haspopup="true">1.1.2 Flyout link</a>
											<ul class="menu">
													<li>
														<a href="javascript:void(0);" class="menu-link" aria-haspopup="true">1.1.2 Flyout link</a>
															<ul class="menu">
																<li>
																	<a href="/page" class="menu-link">1.1.2.1.1 Page link</a>
																</li>
															</ul>
													</li>
													<li>
															<a href="/page" class="menu-link">1.1.2.2 Page link</a>
													</li>
											</ul>
									</li>
									<li>
											<a href="/page" class="menu-link">1.1.3 Page link</a>
									</li>
								</ul>
							</li>
								<li>
											<a href="javascript:void(0);" class="menu-link" aria-haspopup="true">1.2 Flyout
													link</a>
											<ul class="menu">
													<li>
															<a href="/page" class="menu-link">1.2.1 Page link</a>
													</li>
													<li>
															<a href="/page" class="menu-link">1.2.2 Page link</a>
													</li>
											</ul>
									</li>
									<li class="mobile-menu-back-item">
											<a href="javascript:void(0);" class="menu-link mobile-menu-back-link">Back</a>
									</li>
							</ul>
					</li>

					<li class="mobile-menu-header">
							<a href="/home" class="">
									<span>Home</span>
							</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}
