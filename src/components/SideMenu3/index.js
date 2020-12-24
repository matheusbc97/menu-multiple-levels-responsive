import React from 'react'

import './styles.scss'

export default function SideMenu() {
	return (
		<div class="nav">
			<nav class="menu-bar">
			
	
					<li>
						<a href="javascript:void(0);" class="menu-link" aria-haspopup="true">1. Multilevel mega menu</a>
						<ul>
							<li>
								<a href="javascript:void(0);" class="menu-link" aria-haspopup="true">1.1 Flyout
										link</a>
								<ul class="menu sub-menu">
									<li>
											<a href="/page" class="menu-link">1.1.1 Page link</a>
									</li>
									<li>
									{/*<div class="list-container">*/}
										<a href="javascript:void(0);" class="menu-link" aria-haspopup="true">1.1.2 Flyout link</a>
										
											
											<ul class="menu sub-menu">
													<li>
														<a href="javascript:void(0);" class="menu-link" aria-haspopup="true">1.1.2.1 Flyout link</a>
															<ul class="menu sub-menu">
																<li>
																	<a href="/page" class="menu-link">1.1.2.1.1 Page link</a>
																</li>
															</ul>
													</li>
													<li>
															<a href="/page" class="menu-link">1.1.2.2 Page link</a>
													</li>
											</ul>
											{/*</div>*/}
									</li>
									<li>
											<a href="/page" class="menu-link">1.1.3 Page link</a>
									</li>
								</ul>
							</li>
								<li>
											<a href="javascript:void(0);" class="menu-link" aria-haspopup="true">1.2 Flyout
													link</a>
											<ul class="menu sub-menu">
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

			</nav>
		</div>
	)
}
